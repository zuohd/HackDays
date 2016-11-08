using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using Kanban.Board.Interfaces;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Client;

namespace KickingTheTires.Controllers
{
   public class BoardController:ApiController
    {
       public async Task<string> Get(Guid id)
       {
           var board = ActorProxy.Create<IBoard>(new ActorId(id));
           var result = await board.Details();
           return result;
       }

       public Guid Post(InitialiseBoard initialiseBoard)
       {

           var boardId = Guid.NewGuid();
           var board = ActorProxy.Create<IBoard>(new ActorId(boardId));
           board.Initialise(initialiseBoard.Name);
           return boardId;
       }
    }

    public class InitialiseBoard
    {
        public string Name { get; set; };
    }
}
