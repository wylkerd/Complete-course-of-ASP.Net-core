using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ProAgil.WebAPI.Controllers
{
    [ApiController]
    [Route("site/[controller]")]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> GetAction() 
        {
            return new string[] { "Hello world", "Wylkerd Santos" };
        }
        [HttpGet("{id}")]
        public ActionResult<string> GetAction(int id)
        {
            return "value";
        } 
    }
}