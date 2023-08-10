using backend.Api.Dtos;
using backend.Database.Models;
using Microsoft.AspNetCore.Mvc;
using backend.Database.Repository;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SchedulingController : ControllerBase
    {
        private readonly SchedulingRepository _schedulingRepository;
        public SchedulingController(SchedulingRepository schedulingRepository)
        {
            _schedulingRepository = schedulingRepository;
        }

        [HttpGet("{id}")]
        public IActionResult GetSchedulingByID(int id)
        {
            return Ok();
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateScheduling([FromBody] AgendamentoDto newScheduling)
        {
            var newSchedulingModel = new Agendamento() {
                CodCliente = newScheduling.CodCliente,
                CodEmpresa = newScheduling.CodEmpresa,
                Total = newScheduling.Total,
                DataInicio = newScheduling.DataInicio,
                DataFim = newScheduling.DataFim,
            };

            await _schedulingRepository.InsertScheduling(newSchedulingModel);
            
            return Ok();
        }
    }
}