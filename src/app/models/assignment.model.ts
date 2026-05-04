export interface Assignment {
    id:string;
    title: string;
    lawsuitNumber: string;
    deadline: Date;
    priority: priorityLevel;
    status: assignmentStatus;
    description?: string;
}

export type priorityLevel = 'BAIXA' | 'MEDIA' | 'ALTA';

export type assignmentStatus = 'PENDENTE' | 'CONCLUIDO'; 