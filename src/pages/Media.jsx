import React, { useState, useEffect } from 'react';
import { X, Camera, Video } from 'lucide-react';
import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg';
import foto3 from '../assets/foto3.jpg';
import foto4 from '../assets/foto4.jpg';
import foto5 from '../assets/foto5.jpg';
import foto6 from '../assets/foto6.jpg';
import foto7 from '../assets/foto7.jpg';
import foto8 from '../assets/foto8.jpg';
import video1 from '../assets/video1.png';
import video2 from '../assets/video2.png';
import video4 from '../assets/video4.png';
import video6 from '../assets/video6.png';
import video7 from '../assets/video7.png';
import video8 from '../assets/video8.png';
import video10 from '../assets/video10.png';

const Media = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const mediaList = [
        { type: 'video', src: '/video8.mp4', cover: video8 },
        { type: 'video', src: '/video1.mp4', cover: video1 },
        { type: 'video', src: '/video4.mp4', cover: video4 },
        { type: 'video', src: '/video6.mp4', cover: video6 },
        { type: 'video', src: '/video7.mp4', cover: video7 },
        { type: 'video', src: '/video2.mp4', cover: video2 },
        { type: 'video', src: '/video10.mp4', cover: video10 },
        { type: 'image', src: foto1 },
        { type: 'image', src: foto2 },
        { type: 'image', src: foto3 },
        { type: 'image', src: foto4 },
        { type: 'image', src: foto5 },
        { type: 'image', src: foto6 },
        { type: 'image', src: foto7 },
        { type: 'image', src: foto8 },
    ];

    const openMedia = (media) => {
        setSelectedMedia(media);
    };

    const closeMedia = () => {
        setSelectedMedia(null);
    };

    const handleMediaLoad = () => {
        setLoading(false);
    };

    return (
        <div className="bg-white dark:bg-black w-full p-4 space-y-6">
            <h2 style={{ fontFamily: "Inter, sans-serif" }} className="text-2xl font-bold text-center text-black dark:text-white">MEDYA GALERİSİ</h2>

            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {mediaList.map((media, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
                        onClick={() => openMedia(media)}
                    >
                        {media.type === 'image' ? (
                            <img
                                src={media.src}
                                alt={`Media ${index + 1}`}
                                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                                onLoad={handleMediaLoad}
                            />
                        ) : (
                            <div className="relative w-full h-60">
                                <img
                                    src={media.cover}
                                    alt={`Video Cover ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    onLoad={handleMediaLoad}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                                    <Video className="w-6 h-6" />
                                    <span className="text-sm">Videoyu Oynat</span>
                                </div>
                            </div>
                        )}
                        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                            {media.type === 'image' ? <Camera size={14} /> : <Video size={14} />}
                            {media.type === 'image' ? 'Fotoğraf' : 'Video'}
                        </div>
                    </div>
                ))}
            </div>

            {loading && (
                <div className="absolute inset-0 flex items-center justify-center z-50">
                    <div className="animate-spin rounded-full border-t-2 border-b-2 border-[#af1816] w-16 h-16"></div>
                </div>
            )}

            {selectedMedia && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative max-w-4xl w-full px-4">
                        <div className="w-full flex justify-center items-center">
                            <div className="relative">
                                <button
                                    className="absolute top-2 right-2 z-10 text-white bg-black/60 p-1 rounded-full hover:text-red-500 transition-colors"
                                    onClick={closeMedia}
                                >
                                    <X size={28} />
                                </button>
                                {selectedMedia.type === 'image' ? (
                                    <img
                                        src={selectedMedia.src}
                                        alt="Büyütülmüş"
                                        className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
                                    />
                                ) : (
                                    <video
                                        src={selectedMedia.src}
                                        controls
                                        autoPlay
                                        className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Media;