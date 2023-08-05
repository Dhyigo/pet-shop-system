using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Database.Models
{
    public class AgendamentoServico
    {
        [ForeignKey("CodAgendamento")]
        public int CodAgendamento { get; set; }

        [ForeignKey("CodServico")]
        public int CodServico { get; set; }
    }
}
