import { CSSProperties, ReactNode } from 'react';
import { Avatar as AvatarUpload } from '@files-ui/react';

export interface AvatarUploaderProps {
    src: string | File;
    alt: string;
    onChange: (selectedFile: File) => void;
    accept?: string;
    emptyLabel: ReactNode;
    changeLabel: ReactNode;
    loadingLabel?: ReactNode;
    isLoading?: boolean;
    onError?: () => void;
    smartImgFit?: false | 'orientation' | 'center';
    variant: 'circle' | 'square';
    style?: CSSProperties;
}

const AvatarUploader = ({
    src,
    alt,
    onChange,
    accept = '',
    emptyLabel = 'You can upload your logo',
    changeLabel = 'Upload logo',
    loadingLabel = '',
    isLoading = false,
    onError,
    smartImgFit = 'center',
    variant = 'circle',
    style,
}: AvatarUploaderProps) => {
    return (
        <AvatarUpload
            src={src}
            alt={alt}
            onChange={onChange}
            accept={accept}
            emptyLabel={emptyLabel}
            changeLabel={changeLabel}
            loadingLabel={loadingLabel}
            isLoading={isLoading}
            onError={onError}
            smartImgFit={smartImgFit}
            variant={variant}
            style={style}
        />
    );
};

export default AvatarUploader;
