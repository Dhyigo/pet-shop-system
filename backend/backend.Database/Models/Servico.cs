using System.ComponentModel.DataAnnotations;

namespace backend.Database.Models
{
    public class Servico
    {
        [Key]
        public int CodServico { get; set; }

        [Required]
        public string Titulo { get; set; } = string.Empty;

        [Required]
        public string Descricao { get; set; } = string.Empty;

        public double Valor { get; set; }
    }
}
