package hoainguyen.gama.GamaProject.controllers;

import java.io.FileOutputStream;

import javax.validation.Valid;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Marshaller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hoainguyen.gama.GamaProject.domain.Simulation;

@RestController
@RequestMapping("/api")
public class SimulationController {

	@PostMapping("/simulation/createFileXml")
	public void createFileXml(@Valid @RequestBody Simulation simulation) throws Exception {
		
		JAXBContext contextObj = JAXBContext.newInstance(Simulation.class);
		 
        Marshaller marshallerObj = contextObj.createMarshaller();
        marshallerObj.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
         
        // Write data to console
        marshallerObj.marshal(simulation, System.out);
         
        // Write data to file xml
        marshallerObj.marshal(simulation, new FileOutputStream("simulation.xml"));
	}
}
