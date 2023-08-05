using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Database.Models
{
    public class Agendamento
    {
        [Key]
        public int CodAgendamento { get; set; }

        [ForeignKey("CodPessoa")]
        public int CodCliente { get; set; }

        [ForeignKey("CodPessoa")]
        public int CodEmpresa { get; set; }

        [Required]
        public double Total { get; set; }

        [Required]
        public DateTime DataInicio { get; set; }

        [Required]
        public DateTime DataFim { get; set; }
    }
}
