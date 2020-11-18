package hoainguyen.gama.GamaProject.domain;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "Output")
@XmlAccessorType(XmlAccessType.FIELD)
public class Output {

	@XmlAttribute(name = "id")
	private int id;

	@XmlAttribute(name = "name")
	private String name;

	@XmlAttribute(name = "frameRate")
	private int frameRate;

	public Output() {
	}

	public Output(int id, String name, int frameRate) {
		super();
		this.id = id;
		this.name = name;
		this.frameRate = frameRate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getFrameRate() {
		return frameRate;
	}

	public void setFrameRate(int frameRate) {
		this.frameRate = frameRate;
	}

	@Override
	public String toString() {
		return "Output [id=" + id + ", name=" + name + ", frameRate=" + frameRate + "]";
	}
	
}
