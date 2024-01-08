using System;
using System.Collections.Generic;
using System.Web.Http;
using CookieAuth.Models;
using CookieAuth.Utilities;

namespace CookieAuth.Controllers
{
    [RoutePrefix("api/auth")]
    public class AuthController : ApiController
    {
        [Route("login")]
        [HttpHead]
        [HttpPost]
        public IHttpActionResult Login([FromBody] Login login)
        {
            var result = login.Username.Equals("u") && login.Password.Equals("p");

            if (!result) return Unauthorized();
            var accessToken = Md5Hasher.CalculateMd5Hash($"{login.Username}/{DateTime.Now.Ticks}");
            MemoryCacher.Add(accessToken, accessToken, DateTimeOffset.UtcNow.AddMinutes(5));

            return Ok(new
            {
                accessToken = Md5Hasher.CalculateMd5Hash($"{login.Username}/{DateTime.Now.Ticks}")
            });

        }

        [Route("session")]
        [HttpHead]
        [HttpGet]
        public IHttpActionResult Session()
        {
            // check if access-token is valid
            var result = Request.Headers.Authorization;

            if (true)
            {
                return Ok(new
                {
                    accessToken = "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI4"
                });
            }

            return Unauthorized();
        }
    }
}
