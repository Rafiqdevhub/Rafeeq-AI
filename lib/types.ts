export type Match = {
  id: string;
  status: "pending" | "accepted" | "declined";
  partner: {
    id: string;
    name: string;
    imageUrl?: string;
  };
  community?: {
    id: string;
    name: string;
  };
  userGoals: Array<{
    id: string;
    title: string;
  }>;
  partnerGoals?: Array<{
    id: string;
    title: string;
  }>;
};

export type Community = {
  id?: string;
  community: {
    id: string;
    name: string;
    description?: string;
  };
};

export type CommunityItem = {
  id: string;
  name: string;
  description?: string;
};

export type Goal = {
  id: string;
  title: string;
  description?: string;
};

export type Message = {
  id: string;
  content: string;
  senderId: string;
  createdAt: Date | string;
};

export type ConversationSummary = {
  keyPoints?: string[];
  actionItems?: string[];
  nextSteps?: string[];
};
