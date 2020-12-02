using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ProAgil.WebAPI.Data;
using ProAgil.WebAPI.Models;

using System.Text.Json;
using System.Text.Json.Serialization;

namespace ProAgil.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        public DataContext _context { get; }
        public ValuesController(DataContext context)
        {
            _context = context;

        }
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Evento>> Get()
        {
            return _context.Eventos.ToList() ;
        }
        [HttpGet("{id}")]
        public ActionResult<Evento> Get(int id)
        {
            return _context.Eventos.FirstOrDefault(x => x.EventoId == id);
        }
    }
}
