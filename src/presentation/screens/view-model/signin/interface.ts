/**
 * IMPORTS
 */

interface LoginViewModal {
  usuario: string;
  senha: string;
  setUsuario: React.Dispatch<React.SetStateAction<string>>;
  setSenha: React.Dispatch<React.SetStateAction<string>>;
  setIsVisibilityPassword: React.Dispatch<React.SetStateAction<boolean>>;
  isVisibilityPasswords: boolean;
  setOnFocusedEmail: React.Dispatch<React.SetStateAction<boolean>>;
  onFocusedEmail: boolean;
  setOnFocusedPassword: React.Dispatch<React.SetStateAction<boolean>>;
  onFocusedPassword: boolean;
  isLoading: boolean;
  onSubmit: () => void;
  navigate: any
}

/**
 * EXPORTS
 */
export {
  type LoginViewModal
}