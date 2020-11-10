
package hoainguyen.gama.GamaProject.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

import hoainguyen.gama.GamaProject.entities.Project;
import hoainguyen.gama.GamaProject.repository.ProjectRepository;


@RestController
@RequestMapping("/api")
public class ProjectController {

	@Autowired
    private ProjectRepository projectRepository;
	
	@GetMapping("/projects")
    public List<Project> getProjectsByUserId(@RequestParam Long userId) {
        return projectRepository.findByUserId(userId);
    }
	
	@GetMapping("/projects/{id}")
    public Optional<Project> getProjectsById(@PathVariable Long id) {
        return projectRepository.findById(id);
    }
	
	@PostMapping("/projects")
    public Project createProject(@Valid @RequestBody Project project) {
        return projectRepository.save(project);
    }
	
	@PutMapping("/projects")
    public Project editProject(@Valid @RequestBody Project project) {
        return projectRepository.save(project);
    }
	
	@DeleteMapping("/projects/{id}")
    public void deleteProject(@PathVariable Long id) {
        projectRepository.deleteById(id);
    }
}
