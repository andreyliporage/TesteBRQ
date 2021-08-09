using System;
using BRQ.Domain.Enums;

namespace BRQ.Domain.Entities
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cpf { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public ESexo Sexo { get; set; }
        public DateTime DataNascimento { get; set; }
    }
}