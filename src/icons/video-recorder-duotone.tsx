type Props = {
    width?: string
    height?: string
}

const VideoRecorderDuotone = (props: Props) => {
    return (
        <svg
            width={props.width || "24"}
            height={props.height || "24"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.8375 7.25891L15 10V14L18.8375 16.7411C20.1613 17.6866 22 16.7404 22 15.1136V8.88638C22 7.25963 20.1613 6.31339 18.8375 7.25891Z"
                fill="#707070"
            />
            <rect x="2" y="5" width="15" height="14" rx="3" fill="#545454" />
        </svg>
    )
}

export default VideoRecorderDuotone
