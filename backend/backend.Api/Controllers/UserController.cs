using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        public UserController()
        {}

        [HttpGet("{id}")]
        public IActionResult GetUserByID(int id)
        {
            return Ok();
        }

        [HttpPost("create")]
        public IActionResult CreateUser()
        {
            return Ok();
        }
    }
}