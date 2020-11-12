package hoainguyen.gama.GamaProject.controllers;

import java.util.ArrayList;
import java.util.List;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hoainguyen.gama.GamaProject.entities.GamaParam;
import hoainguyen.gama.GamaProject.repository.GamaParamRepository;

@RestController
@RequestMapping("/api")
public class GamaParamController {
	@Autowired
	private GamaParamRepository gamaParamRepository;
	
	@GetMapping("/gama-params")
    public List<GamaParam> getGamaParamsByFileId(@RequestParam Long fileId) {
        return gamaParamRepository.findByGamaFileId(fileId);
    }
	
	@PostMapping("/gama-params")
    public GamaParam createGamaParam(@Valid @RequestBody GamaParam gamaParam) {
        return gamaParamRepository.save(gamaParam);
    }
	
	@PutMapping("/gama-params")
    public List<GamaParam> editGamaParams(@Valid @RequestBody List<GamaParam> gamaParams) {
		List<GamaParam> result = new ArrayList<GamaParam>();
		for (GamaParam gamaParamInput : gamaParams) {
			GamaParam gamaParam = gamaParamRepository.save(gamaParamInput);
			result.add(gamaParam);
		}
		return result;
    }
	
}
