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
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get() 
        {
            return Json(new            
            {
                msgm = "Hello world", 
                nome = "Wylkerd Santos", 
                idade = "20 anos"
            });
        }
        [HttpGet("{id}")]
        public ActionResult<string> GetAction(int id)
        {
            return "value";
        } 
    }
}