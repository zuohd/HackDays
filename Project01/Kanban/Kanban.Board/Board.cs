using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Runtime;
using Microsoft.ServiceFabric.Actors.Client;
using Kanban.Board.Interfaces;

namespace Kanban.Board
{
    [StatePersistence(StatePersistence.Persisted)]
    internal class Board : Actor, IBoard
    {
        public Board(ActorService actorService, ActorId actorId)
            : base(actorService, actorId)
        {
        }
      
        protected override Task OnActivateAsync()
        {
            ActorEventSource.Current.ActorMessage(this, "Actor activated.");
            return this.StateManager.TryAddStateAsync("count", 0);
        }


        Task IBoard.Initialise(string name)
        {
            return this.StateManager.SetStateAsync("Name", name);
        }

        Task<string> IBoard.Details()
        {
            return StateManager.GetStateAsync<string>("Name");
        }
    }
}
