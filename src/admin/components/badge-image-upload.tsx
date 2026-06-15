/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';

const C = {
  bgPage: '#020617',
  bgCard: '#1e293b',
  bgInput: '#0f172a',
  border: '#334155',
  green: '#10b981',
  greenDark: '#059669',
  error: '#ef4444',
  textPrimary: '#ffffff',
  textFaint: '#94a3b8',
  textGhost: '#64748b',
} as const;

type UploadBadgeImageProps = {
  record: {
    id: string | number;
    params: Record<string, unknown>;
  };
};

export default function UploadBadgeImage(props: UploadBadgeImageProps) {
  const { record } = props;
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const currentImage = record?.params?.image_url as string | undefined;

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setResult(null);

    try {
      const fd = new FormData();
      fd.append('image', file);

      const resp = await fetch(`/api/upload-badge-image/${record.id}`, {
        method: 'POST',
        body: fd,
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: resp.statusText }));
        throw new Error(err.error || 'Upload failed');
      }

      setResult({ success: true, message: 'Image uploaded successfully!' });
      setFile(null);
    } catch (e: unknown) {
      const errMsg = e instanceof Error ? e.message : 'Upload failed';
      setResult({ success: false, message: errMsg });
    } finally {
      setUploading(false);
    }
  };

  const renderFileInfo = () => {
    if (!file) return null;
    const sizeKb = (file.size / 1024).toFixed(1);
    return (
      <div style={{ color: C.textFaint, fontSize: 12, marginTop: 8 }}>
        Selected:
        {' '}
        {file.name}
        {' '}
        (
        {sizeKb}
        {' '}
        KB)
      </div>
    );
  };

  return (
    <div style={{ padding: 24, maxWidth: 500, backgroundColor: C.bgPage }}>
      {currentImage && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ color: C.textFaint, fontSize: 13, marginBottom: 8 }}>
            Current image:
          </div>
          <img
            src={currentImage}
            alt="Current badge"
            style={{
              maxWidth: 200,
              maxHeight: 200,
              borderRadius: 8,
              border: `1px solid ${C.border}`,
              display: 'block',
            }}
          />
        </div>
      )}

      <div style={{ marginBottom: 20 }}>
        <div style={{ color: C.textFaint, fontSize: 13, marginBottom: 8 }}>
          Upload new image:
        </div>
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) {
              if (f.size > 2 * 1024 * 1024) {
                setResult({ success: false, message: 'File too large. Maximum 2 MB.' });
                return;
              }
              setFile(f);
              setResult(null);
            }
          }}
          style={{
            width: '100%',
            padding: 12,
            backgroundColor: C.bgInput,
            color: '#e2e8f0',
            border: `1px solid ${C.border}`,
            borderRadius: 8,
            fontSize: 13,
            boxSizing: 'border-box',
          }}
        />
        {renderFileInfo()}
      </div>

      {result && (
        <div
          style={{
            padding: '10px 14px',
            borderRadius: 8,
            marginBottom: 16,
            fontSize: 13,
            backgroundColor: result.success ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
            border: `1px solid ${result.success ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`,
            color: result.success ? C.green : C.error,
          }}
        >
          {result.message}
        </div>
      )}

      <button
        type="button"
        onClick={handleUpload}
        disabled={!file || uploading}
        style={{
          backgroundColor: file ? C.green : C.border,
          color: C.textPrimary,
          border: 'none',
          borderRadius: 8,
          padding: '10px 20px',
          fontSize: 14,
          fontWeight: 600,
          cursor: file && !uploading ? 'pointer' : 'not-allowed',
          opacity: file && !uploading ? 1 : 0.6,
          transition: 'background-color 0.15s ease',
        }}
        onMouseEnter={(e) => {
          if (file && !uploading) {
            (e.target as HTMLButtonElement).style.backgroundColor = C.greenDark;
          }
        }}
        onMouseLeave={(e) => {
          if (file && !uploading) {
            (e.target as HTMLButtonElement).style.backgroundColor = C.green;
          }
        }}
      >
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>
    </div>
  );
}
