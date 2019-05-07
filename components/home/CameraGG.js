import React from "react"
import Camera from "react-camera"
import { Row, Col, Button, Card, CardBody } from "reactstrap"

export default class CameraGG extends React.Component {
    constructor(props) {
        super(props)
    }
    takePicture = () => {
        this.camera.capture().then(blob => {
            this.img.src = URL.createObjectURL(blob)
            this.img.onload = () => {
                URL.revokeObjectURL(this.src)
            }
        })
    }
    render() {
        let img = this.props
        return (
            <div>
                <Row>
                    <Col md="6">
                        <Card body className="text-center">
                            <CardBody>
                                <div style={style.container}>
                                    <Camera
                                        style={style.preview}
                                        ref={cam => {
                                            this.camera = cam
                                        }}
                                    />
                                    <br />
                                    <Button
                                        color="primary"
                                        onClick={this.takePicture}
                                    >
                                        <i class="fas fa-camera" /> ถ่ายภาพ
                                    </Button>{" "}
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card body className="text-center">
                            <CardBody>
                                <div style={style.container}>
                                    <img
                                        style={style.captureImage}
                                        ref={img => {
                                            this.img = img
                                        }}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
const style = {
    preview: {
        position: "relative",
    },
    captureContainer: {
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        zIndex: 1,
        bottom: 0,
        width: "100%",
    },
    captureImage: {
        width: "100%",
    },
}
