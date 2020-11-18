package hoainguyen.gama.GamaProject.domain;

import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlElement;

@XmlRootElement(name = "Simulation")
@XmlAccessorType(XmlAccessType.FIELD)
public class Simulation {
	
	@XmlAttribute(name = "id")
	private int id;

	@XmlAttribute(name = "sourcePath")
	private String sourcePath;

	@XmlAttribute(name = "finalStep")
	private int finalStep;

	@XmlAttribute(name = "experiment")
	private String experiment;

	@XmlAttribute(name = "seed")
	private int seed;
	
	@XmlElementWrapper(name = "Parameters")
    @XmlElement(name = "Parameter")
    private List<Parameter> parameters;
	
	@XmlElementWrapper(name = "Outputs")
    @XmlElement(name = "Output")
    private List<Output> outputs;

	public Simulation() {
	}

	public Simulation(int id, String sourcePath, int finalStep, String experiment, int seed) {
		super();
		this.id = id;
		this.sourcePath = sourcePath;
		this.finalStep = finalStep;
		this.experiment = experiment;
		this.seed = seed;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSourcePath() {
		return sourcePath;
	}

	public void setSourcePath(String sourcePath) {
		this.sourcePath = sourcePath;
	}

	public int getFinalStep() {
		return finalStep;
	}

	public void setFinalStep(int finalStep) {
		this.finalStep = finalStep;
	}

	public String getExperiment() {
		return experiment;
	}

	public void setExperiment(String experiment) {
		this.experiment = experiment;
	}

	public int getSeed() {
		return seed;
	}

	public void setSeed(int seed) {
		this.seed = seed;
	}
	
	public List<Parameter> getParameters() {
		return parameters;
	}

	public void setParameters(List<Parameter> parameters) {
		this.parameters = parameters;
	}

	public List<Output> getOutputs() {
		return outputs;
	}

	public void setOutputs(List<Output> outputs) {
		this.outputs = outputs;
	}

	@Override
	public String toString() {
		return "Simulation [id=" + id + ", sourcePath=" + sourcePath + ", finalStep=" + finalStep + ", experiment="
				+ experiment + ", seed=" + seed + "]";
	}
	
}
