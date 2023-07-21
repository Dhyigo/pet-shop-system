using System.ComponentModel.DataAnnotations;

namespace backend.Database.Models
{
    public enum UsuarioTipos { 
        comum,
        administrador
    }

    public class Usuario
    {
        [Key]
        public int CodUsuario { get; set; }

        public string Nome { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Senha { get; set; } = string.Empty;

        public UsuarioTipos Tipo { get; set; } = UsuarioTipos.comum;

        public bool Ativo { get; set; } = true;
    }
}
