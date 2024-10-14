import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về Channel Trần Hoàng Quân
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        {/* kích thước video */}
                        <iframe width="100%" height="450px"
                            src="https://www.youtube.com/embed/lVCYdnHZIjw"
                            title="[Nhóm 4] KTPM- Tìm hiểu và demo về công cụ SELENIUM"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <div className='content-right'>
                        <div>
                            Ngày mình còn là sinh viên, đi học tại giảng đường đại học, có rất nhiều câu hỏi mà các thầy cô không giúp mình trả lời được, ví dụ như "Để trở thành một lập trình viên website thì cần học những gì", hay một câu hỏi đơn giản hơn, "Học công nghệ thông tin, ra trường thường làm những gì ? "...

                            Trong video này, mình sẽ giải thích một cách ngắn gọn những kiến thức mà bạn cần biết để trở thành 1 web developer, cũng như trả lời câu hỏi, "Tại sao mình lại chọn web developer, thay vì app developer, or game developer? (làm ứng dụng di động và làm game).

                            Video này sẽ là kiến thức cơ bản nhất mà một người mới bắt đầu vào ngành công nghệ thông, sinh viên năm nhất, sinh viên chưa có định hướng cần biết, trước khi muốn 'dấn thân' vào con đường trở thành 1 website developer
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        //
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
