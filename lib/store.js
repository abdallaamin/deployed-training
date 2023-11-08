import { create } from 'zustand'

const useStore = create((set) => ({
    users: [],
    TrainingRequests: [],
    CancellationRequests: [],
    uploadedUsers: [],
    PostResponseUsers: [],
    setUsers: (newUsers) => set({ users: newUsers }),
    setTrainingRequests: (newTrainingRequest) => set({ TrainingRequests: newTrainingRequest }),
    setCancellationRequests: (newCancellationRequest) => set({ CancellationRequests: newCancellationRequest }),
    setUploadedUsers: (newUploaded) => set({ uploadedUsers: newUploaded }),
    setPostResponseUsers: (newPostUsers) => set({ PostResponseUsers: newPostUsers }),
}));

export default useStore;