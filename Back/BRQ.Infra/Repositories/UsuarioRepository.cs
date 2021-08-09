using System;
using System.Collections.Generic;
using BRQ.Domain.Entities;
using BRQ.Domain.Repositories;
using BRQ.Infra.DataContexts;
using Dapper;

namespace BRQ.Infra.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly BrqContext _context;

        public UsuarioRepository(BrqContext context)
        {
            _context = context;
        }
        public IEnumerable<Usuario> Get()
        {
            var sql = "SELECT * FROM [User]";

            return _context.Connection.Query<Usuario>(sql);
        }

        public Usuario Get(int id)
        {
            var sql = "SELECT * FROM [User] WHERE [Id] = @Id";
            return _context.Connection.QueryFirst<Usuario>(sql, new { id });
        }

        public int Post(Usuario usuario)
        {
            var sql = @"INSERT INTO [User] VALUES(
                @Nome,
                @Cpf,
                @Email,
                @Telefone,
                @Sexo,
                @DataNascimento)
                SELECT SCOPE_IDENTITY()";

            var novoUsuarioId = _context.Connection.ExecuteScalar<int>(sql,
                new { usuario.Nome, usuario.Cpf, usuario.Email, usuario.Telefone, usuario.Sexo, usuario.DataNascimento });

            return novoUsuarioId;
        }

        public int Put(Usuario usuario)
        {
            var sql = @"UPDATE [User] SET 
                [Nome] = @Nome,
                [Cpf] = @Cpf,
                [Email] = @Email,
                [Telefone] = @Telefone,
                [Sexo] = @Sexo,
                [DataNascimento] = @DataNascimento
                WHERE [Id] = @Id";

            var idUsuario = _context.Connection.Execute(sql,
             new
             {
                 Id = usuario.Id,
                 Nome = usuario.Nome,
                 Cpf = usuario.Cpf,
                 Email = usuario.Email,
                 Telefone = usuario.Telefone,
                 Sexo = usuario.Sexo,
                 DataNascimento = usuario.DataNascimento
             });

            return idUsuario;
        }

        public int Delete(int id)
        {
            var sql = @"DELETE FROM [User] WHERE [Id] = @Id";
            var linhasAfetadas = _context.Connection.Execute(sql, new { id });
            return linhasAfetadas;
        }

        public bool ExisteUsuario(int id)
        {
            var usuario = Get(id);

            return true;
        }
    }
}