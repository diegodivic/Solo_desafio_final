-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema API_DevCell
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema API_DevCell
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `API_DevCell` DEFAULT CHARACTER SET utf8 ;
USE `API_DevCell` ;

-- -----------------------------------------------------
-- Table `API_DevCell`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `API_DevCell`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(300) NOT NULL,
  `tipo_usuario` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `API_DevCell`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `API_DevCell`.`categoria` (
  `id_categoria` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `descrição` TEXT NOT NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `API_DevCell`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `API_DevCell`.`produto` (
  `id_produto` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `link_foto` VARCHAR(255) NOT NULL,
  `preço` DOUBLE NOT NULL,
  `descrição` TEXT NOT NULL,
  `categoria_id` INT NOT NULL,
  PRIMARY KEY (`id_produto`),
  INDEX `fk_produto_categoria_idx` (`categoria_id` ASC) VISIBLE,
  CONSTRAINT `fk_produto_categoria`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `API_DevCell`.`categoria` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `API_DevCell`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `API_DevCell`.`pedido` (
  `numero` INT NOT NULL AUTO_INCREMENT,
  `lista_produtos` VARCHAR(200) NOT NULL,
  `valor_total` DOUBLE NOT NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`numero`),
  INDEX `fk_pedido_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `API_DevCell`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `API_DevCell`.`itens_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `API_DevCell`.`itens_pedido` (
  `seq` INT NOT NULL,
  `quantidade` INT NOT NULL,
  `preco_unitario` DOUBLE NOT NULL,
  `preco_final` DOUBLE NOT NULL,
  `pedido_numero` INT NOT NULL,
  `produto_id` INT NOT NULL,
  PRIMARY KEY (`seq`),
  INDEX `fk_itens_pedido_pedido1_idx` (`pedido_numero` ASC) VISIBLE,
  INDEX `fk_itens_pedido_produto1_idx` (`produto_id` ASC) VISIBLE,
  CONSTRAINT `fk_itens_pedido_pedido1`
    FOREIGN KEY (`pedido_numero`)
    REFERENCES `API_DevCell`.`pedido` (`numero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_itens_pedido_produto1`
    FOREIGN KEY (`produto_id`)
    REFERENCES `API_DevCell`.`produto` (`id_produto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
