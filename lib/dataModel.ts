export interface DataServerModel {
    cookies: string
    data: OverallData
}

export interface OverallData {
    animated_para: string
    bio: BasicInfo<BioContent[]>
    hobby: BasicInfo<string>
    name: string
    online: BasicInfo<OnlineContent[]>
    project: ProjectContent[]
    title: string
    work: BasicInfo<string>
}

interface BasicInfo<T> {
    title: string
    content: T
}

interface OnlineContent {
    type: string
    link: string
    display: string
}

interface BioContent {
    year: number
    event: string
}

interface ProjectContent {
    description: string
    linkGithub: string
    shortDesc: string
    technology: {
        backend: string[]
        frontend: string[]
        database: string[]
    }
    title: string
}