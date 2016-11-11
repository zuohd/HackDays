using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Web.Http;

namespace VotingService.Controllers
{
    [ServiceRequestActionFilter]
    public class VotesController : ApiController
    {
        public static long _requestCount = 0L;
        private static Dictionary<string, int> _counts = new Dictionary<string, int>();

        [HttpGet]
        [Route("api/votes")]
        public HttpResponseMessage Get()
        {
            Interlocked.Increment(ref _requestCount);
            List<KeyValuePair<string, int>> votes = new List<KeyValuePair<string, int>>(_counts.Count);
            foreach (var kvp in _counts)
            {
                votes.Add(kvp);
            }
            var response = Request.CreateResponse(HttpStatusCode.OK, votes);
            response.Headers.CacheControl = new CacheControlHeaderValue() {NoCache = true, MustRevalidate = true};
            return response;
        }

        [HttpPost]
        [Route("api/{key}")]
        public HttpResponseMessage Post(string key)
        {
            Interlocked.Increment(ref _requestCount);
            if (!_counts.ContainsKey(key))
            {
                _counts.Add(key, 1);
            }
            else
            {
                _counts[key] += 1;
            }
            return Request.CreateResponse(HttpStatusCode.NoContent);
        }

        [HttpGet]
        [Route("api/{key}")]
        public HttpResponseMessage Delete(string key)
        {
            Interlocked.Increment(ref _requestCount);
            if (_counts.ContainsKey(key))
            {
                if (_counts.Remove(key))
                {
                    return Request.CreateResponse(HttpStatusCode.OK);
                }
            }
            return Request.CreateResponse(HttpStatusCode.NotFound);
        }

        [HttpGet]
        [Route("api/{file}")]
        public HttpResponseMessage GetFile(string file)
        {

            string response = null;
            string responseType = "text/html";
            Interlocked.Increment(ref _requestCount);
            if (file == "index.html")
            {
                var path = $@"..\votingServicePkg.code.1.0.0\{file}";
                response = File.ReadAllText(path);
            }
            if (response != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, response, responseType);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "file");
            }
        }
    }