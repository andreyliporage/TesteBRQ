CREATE DATABASE [Brq]
GO

USE [Brq]
GO

CREATE TABLE [User] (
    [Id] INT NOT NULL IDENTITY(1, 1),
    [Nome] NVARCHAR(80) NOT NULL,
    [Cpf] VARCHAR(11) NOT NULL,
    [Email] VARCHAR(200) NOT NULL,
    [Telefone] VARCHAR(9) NOT NULL,
    [Sexo] CHAR NOT NULL,
    [DataNascimento] DATETIME NOT NULL DEFAULT(GETDATE())

    CONSTRAINT [PK_User] PRIMARY KEY([Id]),
    CONSTRAINT [UQ_User_Email] UNIQUE([Email]),
    CONSTRAINT [UQ_User_Cpf] UNIQUE([Cpf])
)
CREATE NONCLUSTERED INDEX [IX_User_Email] ON [User]([Email])
CREATE NONCLUSTERED INDEX [IX_User_Cpf] ON [User]([Cpf])

INSERT INTO [User] VALUES (
    'Lebron James',
    '92417320088',
    'lebron@nba.com',
    '970770825',
    1,
    '1984-12-30 00:00:00'
),
(
    'Kevin Durant',
    '29893272076',
    'durant@nba.com',
    '970770825',
    1,
    '1988-09-29 00:00:00'
),
(
    'Hortência Marcari',
    '30532807014',
    'hortencia@nba.com',
    '970770825',
    2,
    '1959-09-23 00:00:00'
)