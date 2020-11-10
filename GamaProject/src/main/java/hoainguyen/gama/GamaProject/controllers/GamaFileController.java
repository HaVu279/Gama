package hoainguyen.gama.GamaProject.controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hoainguyen.gama.GamaProject.entities.GamaFile;
import hoainguyen.gama.GamaProject.repository.GamaFileRepository;

@RestController
@RequestMapping("/api")
public class GamaFileController {

	@Autowired
	private GamaFileRepository gamaFileRepository;
	
	@GetMapping("/gama-files")
    public List<GamaFile> getGamaFilesByUserId(@RequestParam Long projectId) {
        return gamaFileRepository.findByProjectId(projectId);
    }
	
	@GetMapping("/gama-files/{id}")
    public Optional<GamaFile> getGamaFilesById(@PathVariable Long id) {
        return gamaFileRepository.findById(id);
    }
	
	@PostMapping("/gama-files")
    public GamaFile createGamaFile(@Valid @RequestBody GamaFile gamaFile) {
        return gamaFileRepository.save(gamaFile);
    }
	
	@DeleteMapping("/gama-files/{id}")
    public void deleteGamaFile(@PathVariable Long id) {
		gamaFileRepository.deleteById(id);
    }
}
