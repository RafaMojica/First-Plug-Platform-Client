export function FileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  );
}

export function IconX({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export function EyeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export function EyeSlashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
}

export function AppleIcon({ className = "" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21.4955 8.84499C21.3857 8.90906 18.7714 10.2611 18.7714 13.2588C18.8946 16.6775 22.0705 17.8764 22.125 17.8764C22.0705 17.9405 21.6455 19.5097 20.3866 21.1545C19.3875 22.5714 18.2786 24 16.5946 24C14.9928 24 14.4178 23.0557 12.5696 23.0557C10.5848 23.0557 10.0232 24 8.50354 24C6.8196 24 5.62853 22.4949 4.57495 21.0913C3.2062 19.2542 2.04281 16.3713 2.00173 13.6032C1.97406 12.1364 2.27584 10.6945 3.04192 9.46983C4.12317 7.76006 6.05353 6.59941 8.16157 6.56113C9.77675 6.51038 11.2143 7.59449 12.2 7.59449C13.1446 7.59449 14.9107 6.56113 16.9089 6.56113C17.7714 6.56197 20.0714 6.80408 21.4955 8.84499ZM12.0634 6.26827C11.7759 4.92874 12.5696 3.58921 13.3089 2.73473C14.2536 1.70138 15.7455 1 17.0321 1C17.1143 2.33953 16.5937 3.65327 15.6634 4.61008C14.8286 5.64343 13.391 6.42136 12.0634 6.26827Z"
        fill="#283544"
      />
    </svg>
  );
}

export function AlertCheck({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-6 h-6 ${className}`}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function GoogleIcon({ className = "" }) {
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22.0001 12.2553C22.0001 11.3288 21.9255 10.6527 21.764 9.9516H11.2651V14.1333H17.4277C17.3035 15.1725 16.6326 16.7376 15.1416 17.7892L15.1207 17.9292L18.4403 20.5206L18.6702 20.5437C20.7824 18.578 22.0001 15.6858 22.0001 12.2553Z"
        fill="#4285F4"
      />
      <path
        d="M11.2651 23.2731C14.2843 23.2731 16.8189 22.2715 18.6702 20.5437L15.1416 17.7892C14.1973 18.4528 12.93 18.916 11.2651 18.916C8.30805 18.916 5.79828 16.9504 4.90362 14.2335L4.77248 14.2447L1.32077 16.9366L1.27563 17.063C3.11447 20.744 6.89158 23.2731 11.2651 23.2731Z"
        fill="#34A853"
      />
      <path
        d="M4.90361 14.2336C4.66755 13.5324 4.53093 12.7812 4.53093 12.0049C4.53093 11.2286 4.66755 10.4775 4.89119 9.77633L4.88494 9.62701L1.38998 6.89191L1.27563 6.94672C0.517754 8.47421 0.0828857 10.1895 0.0828857 12.0049C0.0828857 13.8204 0.517754 15.5356 1.27563 17.0631L4.90361 14.2336Z"
        fill="#FBBC05"
      />
      <path
        d="M11.2651 5.09371C13.3648 5.09371 14.7812 6.00769 15.5889 6.77147L18.7447 3.66643C16.8065 1.851 14.2843 0.736694 11.2651 0.736694C6.89158 0.736694 3.11447 3.26577 1.27563 6.94669L4.8912 9.77631C5.79828 7.05942 8.30805 5.09371 11.2651 5.09371Z"
        fill="#EB4335"
      />
    </svg>
  );
}

export function MicrosoftIcon({ className = "" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="12.9091"
        y="12.9091"
        width="9.09091"
        height="9.09091"
        fill="#FEBA08"
      />
      <rect x="2" y="12.9091" width="9.09091" height="9.09091" fill="#05A6F0" />
      <rect x="12.9091" y="2" width="9.09091" height="9.09091" fill="#80BC06" />
      <rect x="2" y="2" width="9.09091" height="9.09091" fill="#F25325" />
    </svg>
  );
}
