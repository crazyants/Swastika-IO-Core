﻿export class HubData {
    totalInvitation: number;
    isCreatedTeam: boolean;
    activedTeam: Team;
    teams: PagingItems<Team>;
    otherTeams: PagingItems<Team>;
}

export class Team {
    id: number;
    name: string;
    hostId: string;
    avatarUrl: string;
    createdDate: Date;
    isNewMessage: boolean;
    totalMember: number;
    isOpen: boolean;
    totalRequest: number;
    isAdmin: boolean;
    maxTeamMember: number;
    members: PagingItems<TeamMember>;
    messages: PagingItems<Message>;
};
export class TeamMember {
    teamId: number;
    memberId: string;
    isAdmin: boolean;
    isNew: boolean;
    status: number;
    createdDate: Date;
    seenMessageDate: Date;
    seenRequestDate: Date;
    seenInviteDate: Date;
    info: MemberInfo;
    chatInfo: MessengerInfo;
    isOnline: boolean;
}

export class MemberInfo {
    id: string;
    avatarUrl: string;
    firstName: string;
    lastName: string;
    department: string;
    jobTitle: string;
    joinDate: Date;
    email: string;
    phoneNumber: null;
    phoneNumberConfirmed: false;
    userName: string;
}

export class MessengerInfo {
    inCall: boolean;
    userId: string;
    username: string;
    avatarUrl: string;
    connectionId: string;
    joinedDate: Date;
    Rooms: MessengerRoom[]
}

export class MessengerRoom {
    roomName: string;
    userId: string;
    roomTitle: string;
    joinedDate: Date;
    teamId: number;
}

export class Message {
    id: string;
    userId: string;
    username: string;
    avatarUrl: string;
    teamId: number;
    message: string;
    messageType: number;
    notificationType: number;
    createdDate: Date;
    /**
     *
     */
    constructor() {
    }
}

export class PagingItems<T>{
    pageIndex: number;
    pageSize: number;
    totalPage: number;
    totalItems: number;
    items: T[];
}
export class ApiResult<T>{
    status: number;
    responseKey: string;
    errors: string[];
    exception: object;
    data: T;

}