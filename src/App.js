import './App.css';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';
import React, { useState } from 'react';

function App() {
    const [url, setUrl] = useState('');

    const playVideo = (videourl) => {
        setUrl(videourl);
    };
    return (
        <div className='App'>
            <div style={{ backgroundColor: "#000000"}}>
                <h1 style={{ color:'white', padding: "10px 20px", textAlign: "center"}}>Video-App</h1>
                </div>
                <div className='wrapper'>
                <div className='shaka'>
                <ShakaPlayer src={url} />;
            </div>
            <div className='app'>
                <div style={{ backgroundColor: "#000000"}}> 
                <h2  style={{color:'whitesmoke', padding: "10px 15px", textAlign: "left"}}>List Of Videos</h2> 
                </div>
                </div>
            <div class='container'>
                    <div 
                        className='vidblocks'
                        onClick={() => playVideo('https://dash.akamaized.net/digitalprimates/fraunhofer/480p_video/heaac_2_0_with_video/Sintel/sintel_480p_heaac2_0.mpd')}
                    >
                        <video controls='true' poster="https://is4-ssl.mzstatic.com/image/thumb/Purple/v4/24/1c/bf/241cbf17-8850-678e-8f57-29a5709455d6/source/512x512bb.jpg" height="300px " width="300px">
                            <source
                                src='https://dash.akamaized.net/digitalprimates/fraunhofer/480p_video/heaac_2_0_with_video/Sintel/sintel_480p_heaac2_0.mpd'
                                type='application/dash+xml'
                            />
                        </video>
                        <p><b>Title:</b>Sintel</p>
                        <p><b>Description:</b> A Documentary on Sintel </p>
                        
                        
                    </div>
                    <div className='vidblocks' onClick={() => playVideo('https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd')}>
                        <video controls='true' poster="https://upload.wikimedia.org/wikipedia/commons/c/c5/Big_buck_bunny_poster_big.jpg" height="300px" width="300px">
                            <source src='https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd' type='application/dash+xml' />
                        </video>
                        <p><b>Title:</b>Big Buck Bunny</p>
                        <p><b>Description:</b> Animated Movie </p>
                        </div>
                    
                    <div className='vidblocks' onClick={() => playVideo('https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd')}>
                        <video controls='true' poster="https://www.logolynx.com/images/logolynx/1f/1f8c4f869bef2b31b7b916390150e6ad.jpeg" height="300px" width="300px">
                            <source src='https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd' type='application/dash+xml' />
                        </video>
                        <p><b>Title:</b>Parkour</p>
                        <p><b>Description:</b> A Documentary on people getting to know parkour </p>
                    </div>
                    <div
                        className='vidblocks'
                        onClick={() => playVideo('https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd',)}>
                        <video controls='true' poster="https://i.pinimg.com/originals/c6/b9/64/c6b96475e407c2c89ef6177cf1e816ac.jpg" height="300px" width="300px">
                            <source
                                src='https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd'
                                type='application/dash+xml'
                            />
                        </video>
                        <p><b>Title:</b>A VR Experience</p>
                        <p><b>Description:</b>A Virtual Reality tour</p>
                    </div>
                    </div>
                    <div class='container'>
                    <div className='vidblocks' onClick={() => playVideo('https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd')}>
                        <video controls='true' poster="https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/art-of-motion_poster.jpg" height="300px" width="300px">
                            <source src='https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd' type='application/dash+xml' />
                        </video>
                        <p><b>Title:</b>People Hearing About Parkour</p>
                        <p><b>Description:</b> A Documentary</p>
                        </div>
                    <div className='vidblocks' onClick={() => playVideo('https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd')}>
                        <video controls='true' poster="https://bitmovin-a.akamaihd.net/content/playhouse-vr/poster.jpg" height="300px" width="300px">
                            <source src='https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd' type='application/dash+xml' />
                        </video>
                        <p><b>Title:</b>Playhouse VR</p>
                        <p><b>Description:</b>A 360 Degree Video</p>
                    </div>
                    <div
                        className='vidblocks'
                        onClick={() => playVideo('https://dash.akamaized.net/digitalprimates/fraunhofer/480p_video/heaac_2_0_with_video/Sintel/sintel_480p_heaac2_0.mpd',)}>
                        <video controls='true' poster="https://ddz4ak4pa3d19.cloudfront.net/cache/4a/90/4a90b8ec14b82d9d6ad82ebcb2a21ee8.jpg" height="300px" width="300px">
                            <source
                                src='https://dash.akamaized.net/digitalprimates/fraunhofer/480p_video/heaac_2_0_with_video/Sintel/sintel_480p_heaac2_0.mpd'
                                type='application/dash+xml'
                            />
                        </video>
                        <p><b>Title:</b>The Sintel</p>
                        <p><b>Description:</b>A Blender Animated video</p>
                    </div>
                    <div
                        className='vidblocks'
                        onClick={() => playVideo('https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd',)}>
                        <video controls='true' poster="https://hdwallpaper20.com/wp-content/uploads/data/2018/3/5/cartoon-bunny-wallpapers-pin-big-buck-bunny-wallpaper-cartoon-PIC-HWB37027.jpg" height="300px" width="300px">
                            <source
                                src='https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd'
                                type='application/dash+xml'
                            />
                        </video>
                        <p><b>Title:</b>Bucks Bunny</p>
                        <p><b>Description:</b>An Animated Adventure Video</p>
                    </div>
                    </div>
                </div>
                <div className='app'>
                <div style={{ backgroundColor: "#000000"}}> 
                <h2  style={{color:'whitesmoke', padding: "10px 15px", textAlign: "Right"}}>Video-App</h2> 
                </div>
                </div>
            </div>
            
            
        
    );
}

export default App;
