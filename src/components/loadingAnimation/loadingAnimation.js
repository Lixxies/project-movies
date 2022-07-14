import './loadingAnimation.css'

function LoadingAnimation(props) {
    if (props.loading) {
        return (
            <div className="outerLoad">
                <div className={`innerLoad ${props.class}`}>
                        <svg >
                            <line x1="0" y1="0" x2="0" y2="180" />
                        </svg>
                        <svg >
                            <line x1="0" y1="0" x2="0" y2="180" />
                        </svg>
                        <svg >
                            <line x1="0" y1="0" x2="0" y2="180" />
                        </svg>
                        <svg >
                            <line x1="0" y1="0" x2="0" y2="180" />
                        </svg>
                        <svg >
                            <line x1="0" y1="0" x2="0" y2="180" />
                        </svg>
                        <svg >
                            <line x1="0" y1="0" x2="0" y2="180" />
                        </svg>
                        <svg >
                            <line x1="0" y1="0" x2="0" y2="180" />
                        </svg>
                        <svg >
                            <line x1="0" y1="0" x2="0" y2="180" />
                        </svg>
                        <svg >
                            <line x1="0" y1="0" x2="0" y2="180" />
                        </svg>
                        <svg >
                            <line x1="0" y1="0" x2="0" y2="180" />
                        </svg>
                        <svg >
                            <line x1="0" y1="0" x2="0" y2="180" />
                        </svg>
                        <svg >
                            <line x1="0" y1="0" x2="0" y2="180" />
                        </svg>
                </div>
            </div>
        )
    } 
    return  
}

export default LoadingAnimation