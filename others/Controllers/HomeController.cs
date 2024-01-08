using System.Net.Http;
using System.Web.Http;

namespace CookieAuth.Controllers
{
    [RoutePrefix("api/home")]
    public class HomeController : ApiController
    {
        
        [Route("")]
        [HttpGet]
        public HttpResponseMessage Get()
        {
            var response = new HttpResponseMessage();

            response.Content = new StringContent("Hello");

            return response;

        }
    }
}
