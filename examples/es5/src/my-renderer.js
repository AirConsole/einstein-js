class MyRenderer extends Einstein.Renderer {
  awake() {
    this.output = document.getElementById("output")
  }

  render() {
    this.output.innerHTML = this.scene.message;
  }
}