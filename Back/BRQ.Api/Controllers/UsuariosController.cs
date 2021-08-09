using System;
using System.Collections.Generic;
using System.Net;
using BRQ.Domain.Entities;
using BRQ.Domain.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace BRQ.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly IUsuarioRepository _repository;

        public UsuariosController(IUsuarioRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Usuario>> Get()
        {
            try
            {
                var result = _repository.Get();
                if (result == null) return NotFound("Nenhum dado cadastrado na base");

                return Ok(result);
            }
            catch (Exception e)
            {
                return StatusCode((int)HttpStatusCode.BadRequest, e.Message);
            }
        }

        [HttpGet("{id}", Name = "GetById")]
        public ActionResult<Usuario> Get(int id)
        {
            try
            {
                var result = _repository.Get(id);
                if (result == null) return NotFound();

                return Ok(result);
            }
            catch (Exception e)
            {
                return StatusCode((int)HttpStatusCode.BadRequest, e.Message);

            }
        }

        [HttpPost]
        public ActionResult<Usuario> Post([FromBody] Usuario usuario)
        {
            try
            {
                var id = _repository.Post(usuario);
                var novoUsuario = _repository.Get(id);
                return Created(new Uri(Url.Link("GetById", new { id = novoUsuario.Id })), novoUsuario);
            }
            catch (Exception e)
            {
                return StatusCode((int)HttpStatusCode.BadRequest, e.Message);
            }
        }

        [HttpPut("{id}")]
        public ActionResult Put(Usuario usuario)
        {
            try
            {
                var existeUsuario = _repository.ExisteUsuario(usuario.Id);
                if (!existeUsuario) return NotFound();

                var linhasAfetadas = _repository.Put(usuario);
                if (linhasAfetadas == 0) return BadRequest();

                return NoContent();
            }
            catch (Exception e)
            {
                return StatusCode((int)HttpStatusCode.NotFound, e.Message);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var existeUsuario = _repository.ExisteUsuario(id);
                if (!existeUsuario) return NotFound();

                var linhasAfetadas = _repository.Delete(id);
                if (linhasAfetadas == 0) return BadRequest();

                return NoContent();
            }
            catch (Exception e)
            {
                return StatusCode((int)HttpStatusCode.NotFound, e.Message);
            }

        }
    }
}