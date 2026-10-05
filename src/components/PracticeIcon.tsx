import React from 'react';
import {
  Briefcase,
  Shield,
  Coins,
  HeartHandshake,
  FileCheck2,
  Building2,
  BookOpen,
  Scale,
  FileSignature,
  Landmark,
  AlertTriangle,
  MapPin,
  Store,
  Users,
  Droplets,
  Scroll,
  MessagesSquare,
  SearchCheck,
  Compass,
  Gavel,
  LucideProps
} from 'lucide-react';

interface PracticeIconProps extends LucideProps {
  name: string;
}

export const PracticeIcon: React.FC<PracticeIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'Briefcase': return <Briefcase {...props} />;
    case 'Shield': return <Shield {...props} />;
    case 'Coins': return <Coins {...props} />;
    case 'HeartHandshake': return <HeartHandshake {...props} />;
    case 'FileCheck2': return <FileCheck2 {...props} />;
    case 'Building2': return <Building2 {...props} />;
    case 'BookOpen': return <BookOpen {...props} />;
    case 'Scale': return <Scale {...props} />;
    case 'FileSignature': return <FileSignature {...props} />;
    case 'Landmark': return <Landmark {...props} />;
    case 'AlertTriangle': return <AlertTriangle {...props} />;
    case 'MapPin': return <MapPin {...props} />;
    case 'Store': return <Store {...props} />;
    case 'Users': return <Users {...props} />;
    case 'Droplets': return <Droplets {...props} />;
    case 'Scroll': return <Scroll {...props} />;
    case 'MessagesSquare': return <MessagesSquare {...props} />;
    case 'SearchCheck': return <SearchCheck {...props} />;
    case 'Compass': return <Compass {...props} />;
    case 'Gavel': return <Gavel {...props} />;
    default: return <Scale {...props} />;
  }
};
