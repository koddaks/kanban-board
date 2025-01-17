// import { RepoInfo } from '@/types'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Issue } from '@/types/issues'

interface IssuesStore {
  currentRepoUrl: string | null
  issuesByStore: {
    [repoUrl: string]: Issue[]
  }
  setCurrentRepoUrl: (url: string) => void
  setIssuesForRepo: (issues: Issue[]) => void
}

const useIssuesStore = create<IssuesStore>()(
  devtools(
    persist(
      (set, get) => ({
        issuesByStore: {},
        currentRepoUrl: null,
        setIssuesForRepo: (issues) => {
          const { issuesByStore, currentRepoUrl } = get()
          if (currentRepoUrl) {
            set({
              issuesByStore: {
                ...issuesByStore,
                [currentRepoUrl]: issues,
              },
            })
          }
        },
        setCurrentRepoUrl: (url) => {
          set(() => ({
            currentRepoUrl: url,
          }))
        },
      }),
      { name: 'repository-issues' }
    )
  )
)

export default useIssuesStore
