import React from "react";
import {Button, Modal} from "antd";

class AppWorks extends React.Component{
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ visible: false });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        return(
            <div id="works" className="block worksBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>How it's works</h2>
                        <p>lalalam  yeyeyem</p>
                    </div>
                    <div className="contentHolder">
                        <Button  onClick={this.showModal}>
                            <i className="fas fa-play"></i>
                        </Button>
                    </div>
                    <Modal
                        visible={this.state.visible}
                        title="Title"
                        footer={null}
                        onCancel={this.handleCancel}
                    >
                        <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"></iframe>
                    </Modal>


                </div>
            </div>
        )
    }
}

export default AppWorks;