using backend.Database.Models;
using System.ComponentModel.DataAnnotations;

namespace backend.Api.Dtos
{
    public class UsuarioDto
    {
        [Required]
        public string Nome { get; set; } = string.Empty;

        [Required]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string Senha { get; set; } = string.Empty;

        [Required]
        public UsuarioTipos Tipo { get; set; } = UsuarioTipos.comum;

    }
}
