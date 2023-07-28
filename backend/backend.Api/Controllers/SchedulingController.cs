using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SchedulingController : ControllerBase
    {
        public SchedulingController()
        {}

        [HttpGet("{id}")]
        public IActionResult GetSchedulingByID(int id)
        {
            return Ok();
        }

        [HttpPost("create")]
        public IActionResult CreateScheduling()
        {
            return Ok();
        }
    }
}