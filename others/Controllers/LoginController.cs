using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;
using CookieAuth.Models;

namespace CookieAuth.Controllers
{
    public class LoginController : ApiController
    {
        //[HttpGet]
        [HttpPost]
        public HttpResponseMessage Get([FromBody] Login login)
        {
            var response = new HttpResponseMessage();

            var result = login.Username.Equals("u") && login.Password.Equals("p");

            if (result)
            {
                /*
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, login.Username)
                };

                //string[] roles = login.r

                var identity = new ClaimsIdentity(claims, "ace");

                var principle = new ClaimsPrincipal(identity);

                System.Web.HttpContext.Current.User = principle;
                */


                

                var cookie = new CookieHeaderValue("session-id", "12345")
                {
                    Expires = DateTimeOffset.Now.AddMinutes(5),
                    Domain = Request.RequestUri.Host,
                    Path = "/",
                    HttpOnly = true
                };

                response.Headers.AddCookies(new[] { cookie });

                response.Content = new StringContent("The thread 0x8a84 has exited");

                

            }
            else
            {
                response.StatusCode = HttpStatusCode.Unauthorized;

                response.Content = new StringContent("The thread 0x8a84 has exited");

            }

            return response;

        }
    }
}
