using AutoMapper;
using backend.Api.Dtos;
using backend.Database.Models;
using backend.Database.Repository;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserRepository _userRepository;
        public UserController(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet("{id}")]
        public IActionResult GetUserByID(int id)
        {
            return Ok();
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateUser([FromBody] UsuarioDto newUser)
        {
            // WIP: USAR AUTO-MAPPER
            Usuario newUserModel = new Usuario()
            {
                Nome = newUser.Nome,
                Email = newUser.Email,
                Senha = newUser.Senha
            };
            
            await _userRepository.InsertUser(newUserModel);

            return Ok();
        }
    }
}