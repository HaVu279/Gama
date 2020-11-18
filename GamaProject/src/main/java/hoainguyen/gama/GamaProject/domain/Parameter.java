package hoainguyen.gama.GamaProject.domain;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "Parameter")
@XmlAccessorType(XmlAccessType.FIELD)
public class Parameter {

	@XmlAttribute(name = "name")
	private String name;

	@XmlAttribute(name = "type")
	private String type;

	@XmlAttribute(name = "value")
	private int value;
	
	public Parameter() {
	}

	public Parameter(String name, String type, int value) {
		super();
		this.name = name;
		this.type = type;
		this.value = value;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return "Parameter [name=" + name + ", type=" + type + ", value=" + value + "]";
	}
	
}
