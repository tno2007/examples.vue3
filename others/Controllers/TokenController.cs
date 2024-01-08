
using CookieAuth.Utilities;
using System.Collections.Generic;
using System.Web.Http;

namespace CookieAuth.Controllers
{
    [RoutePrefix("api/token")]
    public class TokenController : ApiController
    {
        [Route("{*token}")]
        [HttpHead]
        [HttpGet]
        public IHttpActionResult Get(string token)
        {
            var storedToken = (string) MemoryCacher.GetValue(token);
            if (storedToken == null) return Unauthorized();
            return Ok();
        }
    }
}

/* **
 
list = (List <ChapterEx>)MemoryCacher.GetValue("CacheItem1");
MemoryCacher.Add("CacheItem1", list, DateTimeOffset.UtcNow.AddYears(1));

** */
