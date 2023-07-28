using backend.Api.Dtos;
using backend.Controllers;
using backend.Database;
using backend.Database.Models;
using backend.Database.Repository;
using Castle.Components.DictionaryAdapter.Xml;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace backend.Test
{
    public class UserTests
    {
        [Fact]
        public async Task SaveUser_SaveUserInSqliteDatabase_HttpResultStatusCode()
        {
            // Arrange

            var optionsBuilder = new DbContextOptionsBuilder<DatabaseContext>();
            optionsBuilder.UseInMemoryDatabase("PetShopSystem-test");

            var dbContext = new DatabaseContext(optionsBuilder.Options);
            var repository = new UserRepository(dbContext);
            var controller = new UserController(repository);

            var newUser = new UsuarioDto()
            {
                Nome = "ADRIEL",
                Email = "teste",
                Senha = "1234"
            };

            // Act
            var result = await controller.CreateUser(newUser);
            var okResult = result as StatusCodeResult;

            // Assert
            Assert.NotNull(okResult);
            Assert.Equal(200, okResult?.StatusCode);
        }
    }
}