import React from 'react';

const divWrap = (WrappedComponent) => {

    return props => <div>
            <WrappedComponent {...props} />
        </div>

}

export default divWrap;