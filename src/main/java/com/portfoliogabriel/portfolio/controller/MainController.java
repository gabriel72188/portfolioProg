package com.portfoliogabriel.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/index")
    public String mostrarInicio() { 
        return "index";
    }

    @GetMapping("/habilidad")
    public String mostrarHabilidades() {
        return "habilidad";
    }

    @GetMapping("/proyectos")
    public String mostrarProyectos() {
        return "proyectos";
    }

    @GetMapping("/contacto")
    public String mostrarContacto() {
        return "contacto";
    }
}

