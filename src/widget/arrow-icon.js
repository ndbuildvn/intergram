import { h, Component } from 'preact';

export default class ArrowIcon extends Component {

    render({isOpened},{}) {
        return (
            <div style={{margin: 4}}>
                { isOpened ?
                    // keyboard arrow down
                    <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
                        <path d="M0-.75h24v24H0z" fill="none"/>
                    </svg>

                    :
                    // keyboard arrow up
                    <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg> }
            </div>
        );
    }
}
